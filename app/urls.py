from django.urls import path
from . import views  # Ensure you're importing the views module
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),  # Route for the home view
    path('claim/', views.claim, name='claim'),  # Route for the claim view
    path('404/', views.error_404, name='error_404'),  # Route for the 404 error view
    path('500/', views.error_500, name='error_500'),  # Route for the 500 error view
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
