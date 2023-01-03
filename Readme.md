
# Catch Thre Fruit
This is a simple game implemented in JavaScript using the three.js library. In the game, the player must catch falling colored cubes (fruit) in a bowl using keyboard controls.

## How to Run

to make the project work you follow this steps.
to initialize the npm environment

```ssh
npm init -y
```

to install parcel file project manager

```ssh
npm install parcel
```

to install threejs the 3D game/web engine

```ssh
npm install three
```

to install cannon-es the physics engine for collision and so

```ssh
npm install cannon-es
```

then you can deploy web page using parcel by excuting the following command in the terminal

```ssh
parcel ./src/index.html
```
## How to Play
Use the left and right arrow keys to move the bowl left and right. Try to catch as many falling fruits as possible to score points. Be careful, though: if you let too many fruits fall past the bowl, you'll lose lives. When you run out of lives, the game is over.

## Code Structure
The code is organized into several main sections:

* Initialization: This section sets up the renderer, scene, camera, and lights. It also initializes the 3D model loader and loads the bowl model.

* Game loop: This section contains the main game loop, which updates the game state and renders the scene at each frame. The game loop is implemented using the requestAnimationFrame function, which ensures that the game runs at a consistent frame rate.

* Event handlers: This section contains functions that handle user input and


**Constants**

-   **Bowlurl**: A URL object that points to the location of the bowl
    model

-   **loader**: An instance of the **GLTFLoader** class, used to load
    the bowl model

-   **scene**: An instance of the **THREE.Scene** class, representing
    the 3D space in which objects are rendered

-   **camera**: An instance of the **THREE.PerspectiveCamera** class,
    representing the viewpoint from which the scene is rendered

-   **canvas**: A reference to the **canvas** element in the HTML page,
    where the renderer will display the 3D scene

-   **renderer**: An instance of the **THREE.WebGLRenderer** class,
    responsible for rendering the 3D scene to the canvas

-   **geometry**: An instance of the **THREE.BoxGeometry** class,
    representing the geometry of a cube

**Variables**

-   **bowl**: An object representing the bowl model

-   **counter**: An integer representing the player\'s score

-   **lives**: An integer representing the number of lives the player
    has remaining start with 3

-   **game_on**: A boolean indicating whether the game is currently in
    progress (**1**) or has ended (**0**)

-   **timer**: An integer representing the elapsed time in the game

-   **cubearray**: An array of **THREE.Mesh** objects representing the
    falling cubes(fruits)

-   **n**: An integer representing the number of cubes currently in the
    scene

**Functions**

-   **createcube()**: Generates a new cube with a random color and
    position, and adds it to the scene and the **cubearray** array

-   **render()**: Called on each frame of the game. It updates the
    position of each cube in the **cubearray** and checks for collisions
    with the bowl. If a collision is detected, the score is incremented
    or a life is lost. If the player runs out of lives, the game ends
    and the player is given the option to play again.

-   **resizeRendererToDisplaySize(renderer)**: Adjusts the size of the
    renderer to match the size of the canvas element in the HTML page.
    Returns **true** if the size was changed, and **false** otherwise.
