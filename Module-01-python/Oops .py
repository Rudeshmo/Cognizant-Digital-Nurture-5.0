from abc import ABC, abstractmethod


# Abstraction

class Person(ABC):
    
    # Class Variable
    company = "Cognizant"

    def __init__(self, name, age):
        self.name = name

        # Encapsulation (private variable)
        self.__age = age

    # Getter Method
    def get_age(self):
        return self.__age

    # Setter Method
    def set_age(self, age):
        if age > 0:
            self.__age = age

    @abstractmethod
    def display_role(self):
        pass

    # Static Method
    @staticmethod
    def company_info():
        print("Welcome to", Person.company)

# Inheritance

class Employee(Person):

    def __init__(self, name, age, emp_id):
        super().__init__(name, age)
        self.emp_id = emp_id

    # Polymorphism (Method Overriding)
    def display_role(self):
        print("Role: Employee")



# Multilevel Inheritance

class Developer(Employee):

    def __init__(self, name, age, emp_id, language):
        super().__init__(name, age, emp_id)
        self.language = language

    # Overriding
    def display_role(self):
        print("Role: Developer")

    def show_details(self):
        print("\nDeveloper Details")
        print("Name:", self.name)
        print("Age:", self.get_age())
        print("Employee ID:", self.emp_id)
        print("Language:", self.language)



# Hierarchical Inheritance

class Manager(Employee):

    def __init__(self, name, age, emp_id, team_size):
        super().__init__(name, age, emp_id)
        self.team_size = team_size

    def display_role(self):
        print("Role: Manager")

    def show_details(self):
        print("\nManager Details")
        print("Name:", self.name)
        print("Age:", self.get_age())
        print("Employee ID:", self.emp_id)
        print("Team Size:", self.team_size)



# Main Program

Person.company_info()

dev = Developer("Rudesh", 20, 101, "Python")
mgr = Manager("Arun", 35, 102, 10)

# Polymorphism
employees = [dev, mgr]

for emp in employees:
    emp.display_role()

dev.show_details()
mgr.show_details()

# Encapsulation
print("\nBefore Age Update:", dev.get_age())
dev.set_age(21)
print("After Age Update:", dev.get_age())
