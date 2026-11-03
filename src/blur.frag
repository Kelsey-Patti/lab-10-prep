#version 120 // glsl version 1.2 for OpenGL 2.1

uniform float WINDOW_HEIGHT;
uniform float WINDOW_WIDTH;
uniform sampler2D texture;
void main() {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec2 uv = gl_TexCoord[0].xy;
    vec4 colour = vec4(0.0);
    for (int i = -2; i<= 2;i++){
        for (int j = -2; j<= 2;j++){
            vec2 offset = vec2(float(i)/WINDOW_WIDTH, float(j)/WINDOW_HEIGHT);
            vec4 value = texture2D(texture, uv+offset);
            colour += value;
        }
    }
    colour/=25;
    gl_FragColor = colour;
}
