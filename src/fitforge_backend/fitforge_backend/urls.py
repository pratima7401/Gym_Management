from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from gym.views import (
    MemberViewSet, PlanViewSet, ClassViewSet, ProductViewSet, 
    ContactMessageViewSet, AuthViewSet, MemberRegistrationView
)

# Configure the router for REST API views
router = DefaultRouter()
router.register(r'members', MemberViewSet, basename='members')
router.register(r'plans', PlanViewSet, basename='plans')
router.register(r'classes', ClassViewSet, basename='classes')
router.register(r'products', ProductViewSet, basename='products')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'auth', AuthViewSet, basename='auth')

# Define URL patterns
urlpatterns = [
    path('admin/', admin.site.urls),  # Admin panel
    path('gym/', include(router.urls)),  # API endpoints for the gym app
    path('gym/register/', MemberRegistrationView.as_view(), name='member-registration'),  # Member registration endpoint
]
