
from django.urls import path
from .views import Tasklist

urlpatterns = [
  
    path('', Tasklist.as_view(), name='task_list_url'),
]
