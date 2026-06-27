from rest_framework import serializers
from .models import Habit

class HabitSerializer(serializers.ModelSerializer):

    class Meta:
        model = Habit

        fields = [
            'id','habit_name','completion_status','created_at','updated_at'
        ]

        read_only_fields = ['id','created_at','updated_at']