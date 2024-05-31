from rest_framework import generics
from .models import User
from .serializers import UserSerializer
import json

import stripe
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login, logout as auth_logout
from django.contrib.auth import authenticate  
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.views import PasswordResetView

# View for user list and creation
class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Stripe configuration
stripe.api_key = settings.STRIPE_SECRET_KEY

@method_decorator(csrf_exempt, name='dispatch')
class CreateCheckoutSessionView(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        domain_url = 'http://localhost:3000/'
        try:
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[{
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': 'Your Product Name',
                        },
                        'unit_amount': 2000,
                    },
                    'quantity': 1,
                }],
                mode='payment',
                success_url=domain_url + 'success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=domain_url + 'cancel',
            )
            return JsonResponse({
                'id': checkout_session.id
            })
        except Exception as e:
            return JsonResponse({
                'error': str(e)
            })
        
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Invalid credentials'}, status=400)
    else:
        form = AuthenticationForm()
        return render(request, 'login.html', {'form': form})

def logout(request):
    auth_logout(request)
    return redirect('/')

class CustomPasswordResetView(PasswordResetView):
    template_name = 'password_reset.html'

