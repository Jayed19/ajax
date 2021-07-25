
from django.urls import path
from .views import *

urlpatterns = [
  
    path('', Tasklist.as_view(), name='task_list_url'),
    path('<str:id>/completed/', Taskcompleted.as_view(), name='task_completed'),
]
