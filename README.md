# Order of lunches

Service for ordering lunches

### Installing

After clone this go to lunch_order folder:

```
cd lunch_order
```

Create virtual environment:
```
virtualenv -p python3.5 .venv
```

Install requirements:
```
pip install -r requirements.txt
```

Use migrations:
```
python manage.py migrate
```

Create superuser:
```
python manage.py createsuperuser
```

Run server:
```
python manage.py runserver
```