from django import forms
from django.db.models import fields
from django.forms import widgets
from .models import Task

class TaskFrom(forms.ModelForm):
    class Meta:
        model=Task
        fields=['title']
        widgets={
            'title': forms.TextInput(attrs={'class': 'form-control'})
            }