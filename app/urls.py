from django.urls import path
from . import views  # Ensure you're importing the views module
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),  # Route for the home view
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
