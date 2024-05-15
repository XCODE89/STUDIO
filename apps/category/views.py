from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Category

# Create your views here.
class ListCategoriesViews(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        if Category.objects.all().exists():
            print("categories list")
            return Response({"categories": "No Categories found"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "No Categories found"}, status=status.HTTP_404_NOT_FOUND)
