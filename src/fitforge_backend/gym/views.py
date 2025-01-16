# # from django.shortcuts import render

# # Create your views here.
# from rest_framework import viewsets, permissions, status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.decorators import action
# from django.contrib.auth import authenticate, login, logout
# from .models import  Plan, Class, Product, ContactMessage
# from .serializers import MemberSerializer, PlanSerializer, ClassSerializer, ProductSerializer, ContactMessageSerializer, UserSerializer

# # class MemberViewSet(viewsets.ModelViewSet):
# #     queryset = Member.objects.all()
# #     serializer_class = MemberSerializer
# #     permission_classes = [permissions.IsAdminUser]

# class MemberView(viewsets.ModelViewSet):
#     def post(self, request):
#         serializer = MemberSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "Registration successful"}, status=status.HTTP_201_CREATED)
#         return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# class PlanViewSet(viewsets.ModelViewSet):
#     queryset = Plan.objects.all()
#     serializer_class = PlanSerializer
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# class ClassViewSet(viewsets.ModelViewSet):
#     queryset = Class.objects.all()
#     serializer_class = ClassSerializer
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# class ContactMessageViewSet(viewsets.ModelViewSet):
#     queryset = ContactMessage.objects.all()
#     serializer_class = ContactMessageSerializer
#     permission_classes = [permissions.AllowAny]

#     def create(self, request):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

# class AuthViewSet(viewsets.ViewSet):
#     @action(detail=False, methods=['post'])
#     def login(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         user = authenticate(request, username=username, password=password)
#         if user:
#             login(request, user)
#             serializer = UserSerializer(user)
#             return Response(serializer.data)
#         return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST)

#     @action(detail=False, methods=['post'])
#     def logout(self, request):
#         logout(request)
#         return Response({"success": "Successfully logged out."})

#     @action(detail=False, methods=['get'])
#     def user(self, request):
#         if request.user.is_authenticated:
#             serializer = UserSerializer(request.user)
#             return Response(serializer.data)
#         return Response({"error": "Not logged in"}, status=status.HTTP_400_BAD_REQUEST)



from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login, logout
from .models import Member, Plan, Class, Product, ContactMessage
from .serializers import MemberSerializer, PlanSerializer, ClassSerializer, ProductSerializer, ContactMessageSerializer, UserSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [permissions.IsAdminUser]

class MemberRegistrationView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registration successful"}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class AuthViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def logout(self, request):
        logout(request)
        return Response({"success": "Successfully logged out."})

    @action(detail=False, methods=['get'])
    def user(self, request):
        if request.user.is_authenticated:
            serializer = UserSerializer(request.user)
            return Response(serializer.data)
        return Response({"error": "Not logged in"}, status=status.HTTP_400_BAD_REQUEST)

