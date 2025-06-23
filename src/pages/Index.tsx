
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, User, FileText, Github, Linkedin } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native",
    "Next.js", "Tailwind CSS", "Node.js", "Git", "Prisma", "Figma", "UI/UX Design",
    "Networking", "IP Addressing", "VLAN", "Routing Protocols"
  ];

  const projects = [
    {
      title: "e-Druk Court System",
      description: "A comprehensive digital platform with web and mobile applications for court case management, streamlining legal processes in Bhutan.",
      technologies: ["Next.js", "React Native", "Ruby on Rails", "Tailwind CSS"],
      type: "Final Year Project",
      image: "/lovable-uploads/court1.png"

    },
    {
      title: "ACM Club Management System",
      description: "Complete club management solution with member registration, event tracking, financial management, and analytics dashboard.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      type: "Web Application",
      image: "/lovable-uploads/acm.png"
    },
    {
      title: "Inventory Management System",
      description: "Stock management and reporting system developed during training, improving inventory tracking efficiency.",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      type: "Training Project",
      image: "/lovable-uploads/inventory.png"
    },
    {
      title: "Project Management System",
      description: "Mobile application for project tracking and user profile management with intuitive interface design.",
      technologies: ["Flutter", "Express.js", "Node.js"],
      type: "Mobile App",
      image: "/lovable-uploads/project.png"
    },
    {
      title: "Network Design and Configuration",
      description: "Designed and configured a simple network during my internship at Tashi Cell, including IP addressing, subnetting, and VLAN setup.",
      technologies: ["Cisco Packet Tracer", "IP Addressing", "VLAN"],
      type: "Networking",
      image: "/lovable-uploads/net3.jpeg"
    }
  ];

  const services = [
    {
      title: "UI/UX Design",
      description: "Creating wireframes and prototypes for web and mobile applications with focus on clean, user-friendly layouts using Figma."
    },
    {
      title: "Frontend Web Development",
      description: "Responsive website design and development using modern technologies like React and Tailwind CSS."
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter for seamless user experiences."
    },
    {
      title: "Web App Development",
      description: "Full-stack web applications with REST API integration and backend features using Node.js and modern databases."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-gray-800">Pema Lhamo</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Skills", "Services", "Portfolio", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-purple-600 ${activeSection === item.toLowerCase() ? "text-purple-600" : "text-gray-700"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Contact Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-medium">
                  Enthusiastic Tech Student
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hello, I'm
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Pema Lhamo
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  I'm an aspiring IT student from Bumthang, Bhutan, passionate about technology, innovation, and networking.
                  I strive to build immersive and beautiful web applications through carefully crafted code, user-centric design, and a strong understanding of network infrastructure to ensure performance and reliability.
                </p>
              </div>

              <Button
                onClick={() => scrollToSection("about")}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3"
              >
                Learn More About Me
              </Button>

              {/* Stats */}
              <div className="flex space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">8+</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Years Learning</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end mt-20">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                  <div className="w-full h-80 rounded-2xl overflow-hidden">
                    <img
                      src="/lovable-uploads/fe10b0f7-459a-465c-b0ea-b6bccc7546e2.png"
                      alt="Pema Lhamo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about technology and driven by curiosity to solve problems through innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a dedicated IT student from the beautiful kingdom of Bhutan, currently pursuing my Bachelor's Degree
                in Information Technology at the College of Science and Technology (CST). My journey in technology is
                driven by a deep passion for creating meaningful digital experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a focus on UI/UX design, frontend development, and networking, I approach every project with
                enthusiasm and a growth mindset. I believe in the power of technology to transform lives and
                am committed to contributing to Bhutan's digital transformation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience spans across web development, mobile applications, and networking. I enjoy
                collaborating on innovative projects and am always eager to learn new technologies and
                methodologies that can enhance my skills.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
              <CardHeader>
                <CardTitle className="text-purple-800">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Bachelor's Degree in Information Technology</h3>
                  <p className="text-purple-600 font-medium">College of Science and Technology (CST)</p>
                  <p className="text-gray-600">Bhutan • Current</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">Professional experiences that shaped my technical expertise</p>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-purple-800">Final Year Project</CardTitle>
                    <CardDescription className="text-lg">e-Druk Court System</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">Project</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Leading the development of a comprehensive digital platform with web and mobile applications
                  for court case management, aimed at streamlining legal processes in Bhutan.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React Native", "Ruby on Rails", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} className="bg-purple-100 text-purple-800">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-purple-800">Intern under Network Division</CardTitle>
                    <CardDescription className="text-lg">Tashi Cell - Advanced Networking Division</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">Internship</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Gained hands-on experience in IP addressing, subnetting, VLAN configuration, and routing protocols.
                  Worked with enterprise networking equipment and learned network troubleshooting techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Networking", "IP Addressing", "VLAN", "Routing Protocols"].map((skill) => (
                    <Badge key={skill} className="bg-blue-100 text-blue-800">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-purple-808">On the Job Training</CardTitle>
                    <CardDescription className="text-lg">New Edge</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">Internship</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Developed an Inventory Management System to improve stock tracking and reporting capabilities.
                  Worked with modern web technologies and database management systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "PostgreSQL", "Prisma"].map((tech) => (
                    <Badge key={tech} className="bg-green-100 text-green-800">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600">Technical expertise and soft skills I bring to every project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-white hover:bg-purple-100 text-purple-800 border-purple-200 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["Adaptability", "Quick Learning", "Problem-solving", "Teamwork", "Communication", "Motivation", "Leadership", "Critical Thinking"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-white hover:bg-blue-100 text-blue-800 border-blue-200 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I welcome freelance, volunteer, or collaborative projects to continue growing my skills and provide value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">Notable projects showcasing my technical skills and creativity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Flex row: text left, image right */}
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Text Section */}
                  <div className="flex-1 p-4">
                    <CardHeader className="p-0 mb-2">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl text-purple-800">
                          {project.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="border-purple-300 text-purple-700 text-xs"
                        >
                          {project.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 mt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-purple-100 text-purple-800 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Image Section */}
                  <div className="w-full md:w-64 h-40 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full mt-10 object-cover rounded-r-xl"
                    />
                  </div>


                </div>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-purple-600 font-medium">peelham2018@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
              <CardContent className="p-8 text-center">
                <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-blue-600 font-medium">+975 17813106</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl">Pema Lhamo</span>
          </div>
          <p className="text-gray-400 mb-6">
            Aspiring IT Student • Technology Enthusiast • From Bumthang, Bhutan
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Pema Lhamo. Crafted with passion and dedication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
