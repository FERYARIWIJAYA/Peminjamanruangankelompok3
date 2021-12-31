<template>
  <div>
    <h2>Detail ruangan</h2>
    <template>
      <v-container row wrap>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="200">
              <v-img src="/1.jpg"></v-img>

              <v-card-text>
                <h4>
                  Kelas A
                </h4>
              </v-card-text>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn>See more info</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>

        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="200">
              <v-img src="/2.png"></v-img>

              <v-card-text>
                <h4>
                  Kelas B
                </h4>
              </v-card-text>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn>See more info</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>

        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="200">
              <v-img src="/3.png"></v-img>

              <v-card-text>
                <h4>
                  Kelas C
                </h4>
              </v-card-text>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn>See more info</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>

        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="200">
              <v-img src="/4.jpg"></v-img>

              <v-card-text>
                <h4>
                  Kelas D
                </h4>
              </v-card-text>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn>See more info</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-container>
    </template>
  </div>
</template>
