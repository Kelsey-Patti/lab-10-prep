#version 120 // glsl version 1.2 for OpenGL 2.1

uniform float WINDOW_WIDTH;
uniform float WINDOW_HEIGHT;
uniform vec2 mousePos;
uniform float time;
void main(void) {
    float animationColour = (sin(time/500.0)+1)/2;
    float animationColour2 = (cos(time/300.0)+1)/2;
    float animationColour3 = (sin(time/700.0)+1)/2;
    // Fragment shader should output into gl_FragColor an RGBA:
    float red = (gl_FragCoord.x/WINDOW_WIDTH)*animationColour2;
    float green = (gl_FragCoord.y/WINDOW_HEIGHT)*animationColour3;
    
    float radius = 10.0;
    float d = distance(gl_FragCoord.xy, mousePos);
    if (d< radius){
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }else{
        gl_FragColor = vec4(red, green, animationColour, 1.0);
    }


    
}
