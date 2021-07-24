from django.db import models
from django.db.models.fields import BooleanField

class Task(models.Model):
    title=models.CharField(max_length=50)
    date=models.DateTimeField(auto_now_add=True)
    complete=models.BooleanField(default=False)

def __str__(self):
    return self.title
