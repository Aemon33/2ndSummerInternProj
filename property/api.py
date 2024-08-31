from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import *
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer, ReservationsListSerializer
from .forms import PropertyForm
from useraccount.models import User
from rest_framework_simplejwt.tokens import AccessToken

@api_view(['GET',])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    try :
        token = request.META['HTTP_AUTHORIZATION'].split('bearer ')[1]
        token = AccessToken(token)
        user_id = token.playload['user_id']
        user = User.objects.get(pk=user_id)
       
    except Exception as e :
        user = None



    favorites = []
    properties = Property.objects.all()

    #Filter
    landlord_id = request.GET.get('landlord_id','')
    if landlord_id:
        properties = properties.filter(landlord_id = landlord_id)
    # 


    if user:
        for property in properties:
            if user in property.favorited.all():
                favorites.append(property.id)
    print('favorites',favorites)

    serializer = PropertiesListSerializer(properties, many=True)
    return Response({
        'data':serializer.data,
        'favorites':favorites
        })



@api_view(['GET',])
@authentication_classes([])
@permission_classes([])
def properties_detail(request,pk):
    property = Property.objects.get(pk=pk)
    serializer = PropertiesDetailSerializer(property,many=False )
    return Response(serializer.data)

@api_view(['GET',])
@authentication_classes([])
@permission_classes([])
def property_reservations(request,pk):
    property = Property.objects.get(pk=pk)
    reservations = property.reservations.all()

    serializer = ReservationsListSerializer(reservations, many=True)
    return Response(serializer.data)

@api_view(['POST','FILES'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)

    if form.is_valid():
        property = form.save(commit=False)
        property.landlored = request.user
        property.save()

        return Response({'success':True})
    else:
        print('error', form.errors, form.non_field_errors)
        return Response({'error':form.errors.as_json()}, status=400)


@api_view(['POST'])
def book_property(request, pk):
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guests = request.POST.get('guests', '')

        property = Property.objects.get(pk=pk)

        Reservation.objects.create(
            property=property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by=request.user
        )

        return Response({'success': True})
    except Exception as e:
        print('Error', e)

        return Response({'success': False})


@api_view(['POST'])
def toggle_favorite(request, pk):
    property = Property.objects.get(pk=pk)

    if request.user in property.favorited.all():
        property.favorited.remove(request.user)

        return Response({'is_favorite': False})
    else:
        property.favorited.add(request.user)

        return Response({'is_favorite': True})
