from django.urls import path
from . import views  # Ensure you're importing the views module

urlpatterns = [
    path('', views.home, name='home'),  # Route for the home view
]
