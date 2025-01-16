

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


class Member(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    dob = models.DateField()

    def __str__(self):
        return self.name

class Plan(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=[('enabled', 'Enabled'), ('disabled', 'Disabled')], default='enabled')

    def __str__(self):
        return self.name

class Class(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(max_length=10, choices=[('enabled', 'Enabled'), ('disabled', 'Disabled')], default='enabled')

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=[('enabled', 'Enabled'), ('disabled', 'Disabled')], default='enabled')

    def __str__(self):
        return self.name

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.created_at}"
    


# class User(models.Model):
#     name = models.CharField(max_length=255)
#     email = models.EmailField(unique=True)

#     def __str__(self):
#         return self.name

