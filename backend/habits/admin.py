from django.contrib import admin

from .models import Habit

@admin.register(Habit)
class HabitAdmin(admin.ModelAdmin):

    list_display = [
        'id',
        'habit_name',
        'completion_status',
        'created_at',
    ]

    list_filter = [
        'completion_status'
    ]

    search_fields = [
        'habit_name'
    ]

    ordering = [
        '-created_at'
    ]

# Register your models here.
