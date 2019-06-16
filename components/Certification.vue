<template>
	<v-content>
		<v-layout row wrap grid-list-lg>
			<v-flex xs12>
          		<Title :section="$store.state.section.CERTIFICATE"/>
      		</v-flex>
		</v-layout>
        <v-layout row wrap>
			<v-flex xs12>
				<v-layout row wrap>
					<v-flex md4 sm6 xs12 py-3 v-for="certificate in $store.state.data.certificates" :key="certificate.certificate_id">
						<v-card min-height="500px">
                            <a :href="certificate.certificate_image_url"><v-img :src="certificate.certificate_image_url" aspect-ratio="1.8"></v-img></a>
                            <v-card-title primary-title>
                                <div>
                                    <div class="subheading secondary--text">{{ certificate.website }}</div>
                                    <h3 class="primary--text">{{ certificate.certificate_name }}</h3>
                                    <div class="body-1">{{ certificate.event }}</div>
                                </div>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-title>
                                <div>
                                    <div class="body-2">License : <span class="body-1">{{ certificate.license }}</span></div>
                                    <div class="body-1 secondary--text">Issued On {{ certificate.issued_at_text }}</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn color="primary" v-if="certificate.certificate_url" :href="certificate.certificate_url" target="_blank">View</v-btn>
                            </v-card-actions>
                        </v-card>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-content>
</template>

<script>
import Title from "~/components/Title"

export default {
	components: { Title },
}
</script>

<style>

</style>
