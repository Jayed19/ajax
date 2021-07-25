from django.http import request, JsonResponse
from django.shortcuts import redirect, render
from .forms import TaskFrom
from .models import Task
from django.views.generic import View
from django.forms.models import model_to_dict

class Tasklist(View):
    def get(self,request): 
        form =TaskFrom()
        tasks=Task.objects.all()
        return render(request,'task/task_list.html',context={'form':form,'tasks':tasks})

    def post(self,request):
        form=TaskFrom(request.POST)

        if form.is_valid():
            new_task=form.save()
            return JsonResponse({'amarvar':model_to_dict(new_task)},status=200)

        else:
            return redirect('task_list_url')


