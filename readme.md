# char2workspace

#### A Vivaldi script for setting unicode as workspace icons

Install:

```
./patch-vivaldi
```

Optionally link patch-vivaldi for reinstalling the script after updates:

```
sudo ln -s $(realpath ./patch-vivaldi) /usr/bin/
```

Usage:

1. Open the "select Workspace Icon" menu and the Emoji tab
2. Inspect window.html at vivaldi://inspect/#apps
3. Open console and run:

```
emoji2workspace("SOME-UNICODE ")
```

To center certain unicode icons you can specify a spacing on the right (1-7)

```
emoji2workspace("", 5)
```
