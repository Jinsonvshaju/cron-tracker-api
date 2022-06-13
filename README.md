# Demo: https://lovely-bunny-e6bc4f.netlify.app/
## How to test Demo?
```
 Click CRON tab in the window, click Choose file button and select tracker.csv, or another testing csv.
 Press upload button, then you can see uploaded data as table.
 Go home, and you can see the red and green boxes. Red boxes indicate the future triggers. By clicking the box,
 we can find the respective triggers as table.
 Green box indicate the past events.
 Also provided a cron validator. In the cron tab, in the bottom left corner, we can find "validate cron" text box.
 Please type any cron. We get real time details regarding that cron.
```
---

# What is a Cron Expressions?
```
 Cron expressions are used to configure instances of CronTrigger, a subclass of org.quartz.Trigger. A cron expression is a string consisting of six or seven subexpressions (fields) that describe individual details of the schedule.
 Help: https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm
```
---
# Spring boot and Cron Expression
```
CronExpression replaces CronSequenceGenerator, which is based on java.util.Calendar and which has several known issues that none of the Spring team members felt comfortable solving. Introducing a new type allowed us to use the superior java.time APIs, solve the outstanding issues, and (hopefully) introduce new features as well. While Spring generally prefers to maintain backward compatible, sometimes we do believe that starting from scratch is the best option.
Help: https://spring.io/blog/2020/11/10/new-in-spring-5-3-improved-cron-expressions
```
---
# Purpose of this project
```
 In a single project, we may require more than one cron expression.
 But keep track of every trigger will be very difficult.
 There is also time zone dependency which makes more complex to track all the cron expression.
 This project help us to track all the cron expression using a calendar interface.
 We can upload a file which contain all the cron and time zone information.
```
---

# How this app works?
## Back-end
### Back-end is powered by Node js and Express JS.
#### Helper libraries
##### https://github.com/datasert/cronjs
##### https://www.npmjs.com/package/cronstrue

## Front-end
### Front-end is powered by React js.
#### Helper libraries
##### https://fullcalendar.io/docs/react

---
# Uploading csv format
```
CRON and TIME_ZONE are really important. We can introduce or remove any other columns
```
---
# Thank you
