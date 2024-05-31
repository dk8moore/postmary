from rest_framework import generics
from .models import User
from .serializers import UserSerializer

import stripe
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

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

