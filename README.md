# AI_project
AI project work for University in JavaScript

The task was to made an AI code which can perform well in the grid car race.
I wrote an algorithm with one heuristic function. The algorithm worked like a
greedy algorithm, so it always tried to find one of the best values available. I used a simple heuristic,
which gives each grid its distance value (the number of grid points which are parts of the road)
between the final point and the grid point, so the aim was to choose the next step with the smallest
available heuristic number. The heuristic of each point was calculated in the init function, and then
they were stored in a map which had the same size as the original map. I used the Breadth-first search algorithm for
creating this map with the heuristics. It performed very well on each level.
