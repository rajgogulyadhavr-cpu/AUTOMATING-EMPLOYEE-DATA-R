# Automating Employee Data using ServiceNow

## 📌 Problem Statement
Managing employee-related incidents manually can lead to incorrect priority assignment and delays in issue resolution.

## 💡 Solution
Automated system to handle employee-related incidents by setting default priority and dynamically calculating priority using Impact and Urgency.

## ⚙️ Implementation
- Configured Dictionary Override to set default Priority = 2 (High)
- Developed a Business Rule to automatically calculate priority
- Ensured consistent handling of employee issues

## 🧠 Logic Used
- High Impact + High Urgency → Priority = 1 (Critical)
- Medium Impact + Medium Urgency → Priority = 2 (High)
- Others → Priority = 4 (Low)

## 🛠️ Technologies Used
- ServiceNow
- Business Rules
- Incident Management

## 📸 Output

### Before Automation
![Before](screenshots/before.png)

### After Automation
![After](screenshots/after.png)

## 🚀 Result
The system now automatically assigns priority to employee-related incidents, reducing manual effort and improving response time.

## 🎯 Use Case
This project can be used in organizations to automate employee issue handling and improve IT service efficiency.