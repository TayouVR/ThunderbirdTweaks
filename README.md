# ThunderbirdTweaks

a few css and js tweaks for thunderbird 115.

most of the CSS is based comments in [this thread on the mozilla support page](https://support.mozilla.org/en-US/questions/1422908)https://support.mozilla.org/en-US/questions/1422908

the javascript part can't be run normally because thunderbird has decided to ditch custom js support through that file. use this addon to still make use of js: https://addons.thunderbird.net/en-US/thunderbird/addon/userchromejs-2/

## Instructions <sub>(shamelessly copied from support thread)</sub>

- Settings > General
- Scroll to bottom and click on 'Config Editor' button
- In search type : legacy
- look for this line: toolkit.legacyUserProfileCustomizations.stylesheets
- If it is set as 'false' :
  click on the far right arrow type icon to toggle from 'false' to say 'TRUE'

Now Do this: In Thunderbird

- Help > Troubleshooting Information
  in 'Application Basics' - Profile Folders - click on 'Open Folder' 

A new window opens showing the contents of your profile name folder.

I'm going to give the full instructions because I do not know if people already know how to create and use a userChrome.css file.

- In the 'profile name ' folder create a new folder and call it 'chrome'. The spelling is important - note it is all lower case.
- paste the files userChrome.css and .js into the folder (depending on what youwant to use)
- restart thunderbird to reload

![2023-09-03-04-44-46-5d4670](https://github.com/TayouVR/ThunderbirdTweaks/assets/31988415/907f8437-252c-4e31-ad1b-97c9b9fedf9d)

## Debugging
you can open the thunderbird debugger through `CTRL`+`SHIFT`+`I`
