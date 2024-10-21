from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Flavor
from .serializers import FlavorSerializer

class FlavorViewSet(viewsets.ModelViewSet):
    queryset = Flavor.objects.all()
    serializer_class = FlavorSerializer