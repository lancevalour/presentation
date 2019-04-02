class: middle, center
<!-- background-image: url(background.png) -->

# ADB(Android Debug Bridge)
<br/>

##### Yicheng Zhang
---

<!-- background-image: url(background.png) -->

# What is it
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM90K_PkEy9NQRHWa-R2bQ3L1fKpZIk6CPjPctS0D63Gyf0QynNA" width="150"/>

[Android Debug Bridge](https://developer.android.com/studio/command-line/adb):
> Android Debug Bridge (adb) is a versatile command-line tool that lets you communicate with a device. Provides access to a Unix shell that you can run a variety of commands on a device.

Components:
- A client (send commands, runs on development machine)
- A daemon (adbd, runs commands on device)
- A server (manage communications between client & daemon, runs on development machine)

Included in Android SDK(Platform-Tools package), communicates to device over USB/Wi-Fi.
---

# Usage
- Development
    - logcat
    Print log data to the screen, included in Android Studio

    - [scrcpy](https://github.com/Genymobile/scrcpy)
    A tool for mirroring device screen

        It uses ADB to stream videos for display, to convert user interactions with the mirror screen to device screen.

- Testing
    - [UI/Application Exerciser Monkey](https://developer.android.com/studio/test/monkey)
    Stress test by sending random user events(tap, touch, gesture etc.)

    - [adbpy](https://github.com/lancevalour/adbpy)
    Python wrapper for ADB

        Wraps and abstracts most ADB commands, user can write Python scripts to get device information, send commands etc.
---

# Commands
#### Query devices
``` command
adb devices -l
```

#### Install app
```command
adb install path_to_apk
```

#### Copy files from/to device
```command
adb pull remote local
```

```command
adb push local remote
```
---
# Shell Commands
### Get/set device information
#### Get screen density
```command
adb shell wm density
```
#### Get screen density
```command
adb shell wm density dpi
```
#### Get screen size
```command
adb shell wm size
```
---

# Shell Commands
### Send control commands
#### Tap
```command
adb shell input tap x y
```
#### Swipe
```command
adb shell input swipe x1 y1 x2 y2 duration
```
---

# Shell commands
### Screen capture
#### Screen shot
```command
adb shell screencap filename
```
#### Screen recording
```command
adb shell screenrecord filename
```
---

# Example
#### Simple control
```python
from adbpy import adb
from adbpy.device import Device
# Query devices
devices = adb.get_devices()

# Get the first one
device = Device(devices[0])

# Get id
print(device.get_id())

# Get screen density
print(device.get_screen_density())

# Tap back key
device.tap_back()

# Tap 0, 0
device.tap(0, 0)
```
---

# Example
#### Test and record actions
```python
# Screen recording function
def record_screen():
    device.record_screen(name="video", dst_path=cur_dir, time=10)

# Query devices
devices = adb.get_devices()

# Get first one
device = Device(devices[0])

# Start screen recording thread
Thread(target=record_screen).start()

# Do your test
device.tap(0, 0)
device.swipe(0, 0, 100, 100)
device.long_press(0, 0, 3000)
```
---

# Demo

---
# Reference
- [Android Debug Bridge](https://developer.android.com/studio/command-line/adb)
---
class: middle, center
# Thank you!
