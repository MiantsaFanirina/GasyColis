"use client"

import { useEffect, useState } from "react"

import "@styles/sign.scss"
export default function Sign () {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

   useEffect(() => {
    const handleInputFocus = (event) => {
      event.target.classList.add('active')
    }

    const handleInputBlur = (event) => {
      const input = event.target
      if (input.value === '') {
        input.classList.remove('active')
      }
    }

    const handleToggle = (e) => {
      e.preventDefault()
      const main = document.querySelector('main')
      main.classList.toggle('sign-up-mode')
    }

    const moveSlider = function () {
      const index = this.dataset.value

      const currentImage = document.querySelector(`.img-${index}`)
      const images = document.querySelectorAll('.image')
      images.forEach((img) => img.classList.remove('show'))
      currentImage.classList.add('show')

      const textSlider = document.querySelector('.text-group')
      textSlider.style.transform = `translateY(${-1 * (index - 1) * 2.2}rem)`

      const bullets = document.querySelectorAll('.bullets span')
      bullets.forEach((bull) => bull.classList.remove('active'))
      this.classList.add('active')
    }

    const inputs = document.querySelectorAll('.input-field')
    inputs.forEach((inp) => {
      inp.addEventListener('focus', handleInputFocus)
      inp.addEventListener('blur', handleInputBlur)
    })

    const toggle_btn = document.querySelectorAll('.toggle')
    toggle_btn.forEach((btn) => {
      btn.addEventListener('click', handleToggle)
    })

    const bullets = document.querySelectorAll('.bullets span')
    bullets.forEach((bullet) => {
      bullet.addEventListener('click', moveSlider)
    })

    return () => {
      // Clean up event listeners when component unmounts
      inputs.forEach((inp) => {
        inp.removeEventListener('focus', handleInputFocus)
        inp.removeEventListener('blur', handleInputBlur)
      })

      toggle_btn.forEach((btn) => {
        btn.removeEventListener('click', handleToggle)
      })

      bullets.forEach((bullet) => {
        bullet.removeEventListener('click', moveSlider)
      })
    }
  }, [])

  return (
    <div className="sign">
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form action="index.html" autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <img src="/img/logo.png" alt="easyclass" />
                  <h4>GasyColis</h4>
                </div>

                <div className="heading">
                  <h2>Envoyez ou gagnez de l'argent en transportant des colis </h2>
                  <h6>Pas encore de compte?</h6>
                  <a href="" className="toggle">S'inscrire</a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Mot de passe</label>
                  </div>

                  <input type="submit" value="Se connecter" className="sign-btn" />

                  <p className="text">
                    <a href="#">Mot de passe oublié?</a>
                  </p>
                </div>
              </form>

              <form action="index.html" autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src="/img/logo.png" alt="easyclass" />
                  <h4>GasyColis</h4>
                </div>

                <div className="heading">
                  <h2>Créer un compte</h2>
                  <h6>Vous avez déjà un compte?</h6>
                  <a href="" className="toggle">Se connecter</a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <label>Nom d'utilisateur</label>
                  </div>
                  
                  <div className="actual-form">
                    <div className="input-wrap">
                      <input
                        name="number"
                        id="number"
                        type="text"
                        minLength="4"
                        className="input-field"
                        autoComplete="off"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                      <label>Numero de téléphone</label>
                    </div>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-field"
                      autoComplete="off"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Mot de passe</label>
                  </div>

                  <input type="submit" value="S'inscrire" className="sign-btn" />

                  <p className="text">
                      En m'inscrivant, j'accepte les
                    <a href="#">Conditions d'utilisation</a> et
                    <a href="#">Politiques de confidentialité</a>
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img src="/img/box.gif" className="image img-1 show" alt="" />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Facile et rapide, en quelques cliques</h2>
                  </div>
                </div>

                <div className="bullets">
                  <span className="active" data-value="1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
