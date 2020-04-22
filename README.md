# Install Ionic if you haven't before
npm install -g ionic

# Create a blank new Ionic app with Angular support
ionic start movieApp blank --type=Angular
cd movieApp

# Use the CLI to generate some pages and a service
ionic g page pages/movies
ionic g page pages/movieDetails
ionic g service services/moveie

# start server
ionic serve

# Start the LAB server
ionic lab
