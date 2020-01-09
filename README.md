# 05-WorkScheduler

This is a work day planner/scheduler

he way you have it set up, you'll be looping through your array of objects from local storage
so if your user only filled out 5/9 hours, you'll only have 5 objects in that array
so if you created a for-loop that looped 9 times regardless, you'd probably experience some weirdness
BUT
new messages
what if in returnNotes , you created a for-loop that just looped through the entire length of your gotNote array, used gotNote[i].inputId to target the appropriate input with jquery, and set its text to whatever the current value of gotNote[i].userInput is?
are you picking up what I'm putting down?
