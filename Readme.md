**Imports**

-   **THREE**: A library for creating and manipulating 3D graphics

-   **OrbitControls**: An add-on for **THREE** that allows the user to
    control the camera using orbit controls

-   **GLTFLoader**: A loader for 3D models in the glTF format

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

-   **sun**: An instance of the **THREE.HemisphereLight** class,
    representing a light source that illuminates the scene from above

**Variables**

-   **bowl**: An object representing the bowl model

-   **counter**: An integer representing the player\'s score

-   **lives**: An integer representing the number of lives the player
    has remaining

-   **game_on**: A boolean indicating whether the game is currently in
    progress (**1**) or has ended (**0**)

-   **timer**: An integer representing the elapsed time in the game

-   **cubearray**: An array of **THREE.Mesh** objects representing the
    falling cubes

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
