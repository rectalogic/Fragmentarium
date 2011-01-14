float DE(vec3 z);
#replace "float DE(" "float DE1("
#include "../Kaleidoscopic IFS/Menger.frag"
#replace "Iterations" "Iterations2"
#replace "Scale" "Scale2"
#replace "RotVector" "RotVector2"
#replace "RotAngle" "RotAngle2"
#replace "Offset" "Offset2"
#replace "rot " "rot2 "
#replace "float DE(" "float DE2("
#includeonly "../Kaleidoscopic IFS/Menger.frag"
#replace "float DE(" "float DE("

float DE(vec3 z) {
   return max(DE1(z),DE2(z));
}