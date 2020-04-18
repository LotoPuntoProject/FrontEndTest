from rest_framework import generics
from rest_framework.decorators import permission_classes
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from accounts.serializers import UserSerializer, GroupSerializer


@permission_classes((permissions.AllowAny, ))
class UserViewSetCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    name='registration'

@permission_classes((permissions.IsAuthenticated, ))
class UserViewSetList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    name='users-list'

@permission_classes((permissions.IsAuthenticated, ))
class UserViewSetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    name='users-detail'

    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]