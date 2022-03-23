from django.shortcuts import render
from .models import Postcard


def postcard(request):
    postcards = Postcard.objects.all()
    return render(request, 'postcard/index.html', {'postcards': postcards})
