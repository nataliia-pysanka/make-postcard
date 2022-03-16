from django.conf import settings
from django.db import models
from django.utils import timezone
from mk_postcard.settings import STATIC_ROOT


def path_upload_to(instance, filename):
    return f"images/{instance.author}/{filename}"


class Postcard(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    picture = models.ImageField(upload_to=path_upload_to)
    text = models.TextField(blank=True)
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
