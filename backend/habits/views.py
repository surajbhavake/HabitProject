from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Habit
from .serializers import HabitSerializer

class HabitViewSet(viewsets.ModelViewSet):

    queryset = Habit.objects.all()
    serializer_class = HabitSerializer

    @action(detail=False,methods=('get'))
    def stat(self,request):
        total = Habit.objects.count()
        completed = Habit.objects.filter(completion_status=True).count
        return Response({
            'total' : total,
            'completed' : completed,
            'pending' : total- completed,
            'percentage': (completed/total)*100 if total > 0 else 0
        })

# Create your views here.
