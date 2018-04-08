from django.conf.urls import url
from website_app import views

# SET THE NAMESPACE!
app_name = 'website_app'

urlpatterns = [
    url(r'^signin/$',views.form_sign_in,name='sign_in'),
    url(r'^register/$',views.form_register,name='register'),
]
