from django.http import request
from django.shortcuts import redirect, render
from .forms import TaskFrom
from .models import Task
from django.views.generic import View

class Tasklist(View):
    def get(self,request): 
        form =TaskFrom()
        tasks=Task.objects.all()
        return render(request,'task/task_list.html',context={'form':form,'tasks':tasks})

    def post(self,request):
        form=TaskFrom(request.POST)

        if form.is_valid():
            new_task=form.save()
            return redirect('task_list_url')

        else:
            return redirect('task_list_url')


