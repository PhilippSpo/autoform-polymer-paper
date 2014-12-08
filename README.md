Polymer paper for autoform
======================

Polymer paper input elements for aldeed:autoform

__Note!__ I'm just getting started with this. Right now it's basically the bootstrap3 templates/helpers from autoform, with the name changed to "paper".

__Update__ I've implemented basic text inputs, although I won't mark them off the todo list until I've completed them fully (need to add a way to specify whether or not to use the floating label, a way to disable the input...).

# Todo
- [ ] Text inputs
- [ ] Textarea
- [ ] Checkboxes
- [ ] Radios
- [ ] Selects
- [ ] Buttons
- [ ] Dates
- [ ] Range (using slider)
- [ ] Toggle switch
 
# Instalation

    $ meteor add conielo:autoform-polymer-paper

If you want to use Polymer paper inputs for all your forms, I suggest you make "paper" the default template:

    // Somewhere in a client file or Meteor.isClient function
    AutoForm.setDefaultTemplate('paper');

Otherwise you can also tell autoform to use paper for certain forms/input:

    // When using quickForm
    {{> quickForm template='paper' ... }}
    
    // When building a custom form using autoForm
    {{#autoForm template='paper' ... }}
      ...
    {{/autoForm}}
    
    // For a single input
    {{> afQuickField template='paper' ... }}


# Polymer
Paper element demos https://www.polymer-project.org/components/paper-elements/demo.html#paper-checkbox

Paper element docs https://www.polymer-project.org/docs/elements/paper-elements.html
