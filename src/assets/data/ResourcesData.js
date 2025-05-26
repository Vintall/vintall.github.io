import { ref } from 'vue'
import RedBlobGamesPreview from "@/assets/media/resources/redblobgames.png"
import CatLikeCodingPreview from "@/assets/media/resources/catlikecoding.png"
import CyaniluxPreview from "@/assets/media/resources/cyanilux.png"
import RefactoringGuruPreview from "@/assets/media/resources/RefactoringGuru.png"
import FreepikPreview from "@/assets/media/resources/freepik.png"
import PalettonPreview from "@/assets/media/resources/paletton.png"
//Tags: Market Research, Unity, Shaders, HLSL, ShaderGraph, Math

export const getTagById = (id) => tags.value.find(tag => tag.id === id)

export const tags = ref([
  { id: 'Gamedev', text: 'Gamedev', color: 'bg-red-700' },
  { id: 'Unity', text: 'Unity', color: 'bg-green-500' },
  { id: 'Shaders', text: 'Shaders', color: 'bg-pink-500' },
  { id: 'Solid', text: 'SOLID', color: 'bg-cyan-500' },
  { id: 'FreeAssets', text: 'Assets', color: 'bg-cyan-400' },
  { id: 'Design', text: 'Design', color: 'bg-cyan-300' },
])

const resourceCards = ref([
    {
        name: "Red Blob Games",
        link: "https://www.redblobgames.com/",
        img: RedBlobGamesPreview,
        desc: "Interactive visual explanations of math and algorithms",
        tagIds: ['Gamedev']
    },
    {
        name: "Cat Like Coding",
        link: "https://catlikecoding.com/unity/tutorials/",
        img: CatLikeCodingPreview,
        desc: "C# and Shader Tutorials for the Unity Engine",
        tagIds: ['Gamedev', 'Unity', 'Shaders']
    },
    {
        name: "Cyanilux",
        link: "https://www.cyanilux.com/",
        img: CyaniluxPreview,
        desc: "URP Shader Tutorials",
        tagIds: ['Gamedev', 'Unity', 'Shaders']
    },
    {
        name: "Refactoring Guru",
        link: "https://refactoring.guru/design-patterns/catalog",
        img: RefactoringGuruPreview,
        desc: "Refactoring, design patterns, SOLID principles, and other smart programming topics",
        tagIds: ['Solid']
    },
    {
        name: "FREEPIK",
        link: "https://www.freepik.com/",
        img: FreepikPreview,
        desc: "AI-powered platform for source content (paid). But you can also find here royalty-free music or free icons",
        tagIds: ['FreeAssets']
    },
    {
        name: "Paletton",
        link: "https://paletton.com/",
        img: PalettonPreview,
        desc: "The color scheme designer. Helps to make good color combinations without extensive knowledge in color design",
        tagIds: ['Design']
    }/*,
    {
        name: "",
        link: "",
        img: "",
        desc: "",
        tags: ['Gamedev']
    }*/
])

export const resourceCardsList = resourceCards