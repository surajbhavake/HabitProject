from django.db import models


class Habit(models.Model):

    habit_name = models.CharField(max_length=100)
    completion_status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.habit_name
    
    class Meta:
        ordering = ['-created_at']

# Create your models here.
