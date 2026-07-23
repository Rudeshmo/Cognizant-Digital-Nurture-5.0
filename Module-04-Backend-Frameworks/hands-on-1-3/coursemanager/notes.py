"""
=========================================
Task 1 - Web Framework Foundations
=========================================

1. Request-Response Cycle (GET /api/courses/)

Browser
   |
   v
URL Router (urls.py)
   |
   v
View (views.py)
   |
   v
Model (models.py)
   |
Database Query
   |
   v
Model returns data
   |
   v
View prepares response
   |
   v
HttpResponse / JsonResponse
   |
   v
Browser

-------------------------------------------------

2. Middleware

Middleware sits between the incoming request and the view,
and also processes the outgoing response.

Request
   |
Middleware
   |
URL Router
   |
View
   |
Response
   |
Middleware
   |
Browser

Built-in Middleware Examples

1. SecurityMiddleware
   - Adds various security protections.

2. AuthenticationMiddleware
   - Associates authenticated users with requests.

-------------------------------------------------

3. WSGI vs ASGI

WSGI
- Supports synchronous applications.
- Suitable for traditional web applications.

ASGI
- Supports asynchronous programming.
- Handles WebSockets, async views and long-lived connections.

Django uses WSGI by default.

Use ASGI when building:
- Real-time chat
- Notifications
- WebSockets
- Async APIs

-------------------------------------------------

4. MVC vs Django MVT

MVC

Model
View
Controller

Django MVT

Model      -> Model
View       -> Controller
Template   -> View

In Django:

Model
- Handles database logic.

View
- Handles business logic and request processing.

Template
- Displays data to the user.

"""