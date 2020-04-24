import { shallowMount } from "@vue/test-utils"
import Profile from "@/components/Profile.vue"

describe("Profile.vue", () => {
  it("renders profile information when passed", () => {
    const name = "Profile Information Name: Jose Ponce Role: Software Engineer"
    const wrapper = shallowMount(Profile, {
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(name)
  })
})
