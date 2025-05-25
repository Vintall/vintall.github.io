import { ref } from 'vue';

//Tags: Market Research, Unity, Shaders, HLSL, ShaderGraph, Math

const resourceCards = ref([
    {
        name: "Red Blob Games",
        link: "https://www.redblobgames.com/",
        img: "src/assets/media/resources/redblobgames.png",
        desc: "Interactive visual explanations of math and algorithms"
    },
    {
        name: "Cat Like Coding",
        link: "https://catlikecoding.com/unity/tutorials/",
        img: "src/assets/media/resources/catlikecoding.png",
        desc: "C# and Shader Tutorials for the Unity Engine"
    },
    {
        name: "Cyanilux",
        link: "https://www.cyanilux.com/",
        img: "src/assets/media/resources/cyanilux.png",
        desc: "URP Shader Tutorials"
    },
    {
        name: "Refactoring Guru",
        link: "https://refactoring.guru/design-patterns/catalog",
        img: "src/assets/media/resources/RefactoringGuru.png",
        desc: "Refactoring, design patterns, SOLID principles, and other smart programming topics"
    }
])

export default() => resourceCards