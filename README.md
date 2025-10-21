# Item Management Software

An item management software developed with **Flask + Python + React + TypeScript**, running on **Windows**, with data stored in **JSON** format.


## Key Technologies

* **Backend**: Flask, Python
* **Frontend**: React, TypeScript
* **Packaging Tool**: PyInstaller


## Installation & Usage

### Windows

1. Download the `Item-management-software.exe` file from the Release page.

2. Place the file in the directory where you want to run the software.

3. Double-click the executable. An `items.json` file will be automatically created in the current directory to store data.

4. The software will automatically open in the default browser on **port 5000**.

   * If the browser does not open automatically, you can manually access it at:

     ```
     http://localhost:5000
     ```

> **Note**: Currently, the software only supports Windows. If you are using another system, you may try to compile it yourself.
>
> Development environment versions: Python 3.10.19, Yarn 4.9.4, pip 25.2, other Python package versions listed in `backend/requirements.txt`.


## Data Storage

The software uses **JSON files** to store data:

* Default data file: `items.json`
* The file will be automatically created in the software directory (if it does not exist).


## Features

### 1. Add Item

1. Fill in the form with the following information:

   * Item Name
   * Item Description
   * Contact Information
2. Click the **Add Item** button.
3. The new item will appear in the item list below.

### 2. Delete Item

* Click the **Delete** button on an item card to remove it from the list.

### 3. Search Item

1. Enter a keyword in the search bar.
2. Click the **Search** button.
3. The software will return all matching items.


## Notes

* Data is stored in `items.json`. Do not delete or modify this file arbitrarily, as it may cause data loss.
* Currently, the software only supports local use and does not support multiple users accessing simultaneously.

> **Warning!**
>
> This program runs in the background by default once launched. There is currently no explicit exit method. To close it, you can use the Task Manager to terminate the process.


## License

Until now no license is provided. Do not copy, modify, or distribute this project without permission.