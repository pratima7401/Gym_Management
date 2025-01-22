"""
URL configuration for fitforge_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]
# from django.contrib import admin
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from gym.views import MemberViewSet, PlanViewSet, ClassViewSet, ProductViewSet, ContactMessageViewSet, AuthViewSet
# from django.contrib import admin
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from gym.views import MemberView, PlanViewSet, ClassViewSet, ProductViewSet, ContactMessageViewSet, AuthViewSet, MemberRegistrationView


# router = DefaultRouter()
# router.register(r'members', MemberView)
# router.register(r'plans', PlanViewSet)
# router.register(r'classes', ClassViewSet)
# router.register(r'products', ProductViewSet)
# router.register(r'contact', ContactMessageViewSet)
# router.register(r'auth', AuthViewSet, basename='auth')

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include(router.urls)),
#     path('register/', MemberRegistrationView.as_view(), name='member-registration'),
# ]






from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from gym.views import MemberViewSet, PlanViewSet, ClassViewSet, ProductViewSet, ContactMessageViewSet, AuthViewSet, MemberRegistrationView

router = DefaultRouter()
router.register(r'members', MemberViewSet)
router.register(r'plans', PlanViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'products', ProductViewSet)
router.register(r'contact', ContactMessageViewSet)
router.register(r'auth', AuthViewSet, basename='auth')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/register/', MemberRegistrationView.as_view(), name='member-registration'),
]

