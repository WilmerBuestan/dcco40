import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Trophy, Clock, DollarSign, Phone } from 'lucide-react';
import './App.css';

export default function CampeonatoDe40() {
  const [timeLeft, setTimeLeft] = useState({});
  const [floatingCards, setFloatingCards] = useState([]);

  useEffect(() => {
    const eventDate = new Date('2025-12-04T11:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    // Generar cartas flotantes
    const cards = [];
    const palos = ['♠️', '♥️', '♣️', '♦️'];
    const valores = ['A', '2', '3', '4', '5', '6', '7', '10', '11', '12'];
    for (let i = 0; i < 15; i++) {
      cards.push({
        id: i,
        palo: palos[Math.floor(Math.random() * palos.length)],
        valor: valores[Math.floor(Math.random() * valores.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        delay: Math.random() * 5
      });
    }
    setFloatingCards(cards);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppPago = () => {
    window.open('https://wa.me/593XXXXXXXXX?text=Hola, quiero enviar mi comprobante de pago para el Campeonato de 40', '_blank');
  };

  const handleInscripcion = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSckpGtIGtsCJllmHUt4ofumK46th48Z0F-N0NSxWgmcIY8cfg/viewform?usp=header', '_blank');
  };

  return (
    <div className="app-container">
      {/* Cartas flotantes de fondo */}
      <div className="floating-cards-bg">
        {floatingCards.map(card => (
          <div
            key={card.id}
            className="floating-card"
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: `rotate(${card.rotation}deg)`,
              animationDelay: `${card.delay}s`
            }}
          >
            {card.palo}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="card-icon">🃏</span>
            <span>40 DCCO</span>
          </div>
          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#info">Información</a>
            <a href="#galeria">Galería</a>
            <a href="#premios">Premios</a>
          </div>
          <button onClick={handleInscripcion} className="btn-primary">
            ¡Inscríbete Ya!
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            🃏 CAMPEONATO OFICIAL DE CARTAS 🃏
          </div>
          
          {/* Cartas formando 40 */}
          <div className="cards-40">
            <div className="card-display card-left">
              <div className="card-number red">4</div>
              <div className="card-suit red">♥️</div>
            </div>
            <div className="card-display card-right">
              <div className="card-number">0</div>
              <div className="card-suit">♠️</div>
            </div>
          </div>

          <h1 className="hero-title">
            CAMPEONATO<br />DE 40
          </h1>
          
          <div className="hero-subtitle">
            🎉 FIESTAS DE QUITO 2025 🎉
          </div>
          
          <p className="hero-text">
            Universidad de las Fuerzas Armadas - ESPE<br />
            Departamento de Ciencias de la Computación
          </p>

          {/* Countdown */}
          <div className="countdown-box">
            <p className="countdown-title">⏰ CUENTA REGRESIVA PARA EL GRAN TORNEO ⏰</p>
            <div className="countdown-grid">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="countdown-item">
                  <div className="countdown-value">{value || 0}</div>
                  <div className="countdown-label">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button onClick={handleInscripcion} className="btn-inscripcion">
              🃏 Inscribirse Ahora - $7 por pareja
            </button>
            <button onClick={handleWhatsAppPago} className="btn-whatsapp">
              <Phone size={24} />
              Enviar Comprobante
            </button>
          </div>
        </div>
      </section>

      {/* Sección de palos del juego */}
      <section className="game-section">
        <div className="section-content">
          <div className="section-header">
            <h2>🎴 ¿Qué es el 40? 🎴</h2>
            <p>El juego de cartas tradicional ecuatoriano por excelencia</p>
          </div>
          
          <div className="palos-grid">
            {[
              { palo: '♠️', nombre: 'CORAZÓN NEGRO', color: 'black' },
              { palo: '♥️', nombre: 'CORAZÓN ROJO', color: 'red' },
              { palo: '♣️', nombre: 'TREBOL', color: 'black' },
              { palo: '♦️', nombre: 'DIAMANTE', color: 'red' }
            ].map((palo, idx) => (
              <div key={idx} className="palo-card">
                <div className={`palo-icon ${palo.color}`}>{palo.palo}</div>
                <div className="palo-name">{palo.nombre}</div>
              </div>
            ))}
          </div>

          <div className="objetivo-box">
            <h3>🎯 Objetivo del Juego</h3>
            <p>
              Ser la primera pareja en alcanzar 40 puntos mediante el canto de juegos,
              caídas y la estrategia en cada mano. ¡Domina las cartas y lleva a tu pareja a la victoria!
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="info-section">
        <div className="section-content">
          <h2 className="section-title">
            📋 Información del Torneo 🃏
          </h2>
          
          <div className="info-grid">
            {[
              {
                icon: <Calendar size={48} />,
                title: "Fecha",
                content: "Jueves 4 de Diciembre 2025",
                emoji: "📅"
              },
              {
                icon: <Clock size={48} />,
                title: "Horario",
                content: "11:00 AM - 4:00 PM",
                emoji: "⏰"
              },
              {
                icon: <MapPin size={48} />,
                title: "Ubicación",
                content: "Pasillos de los Bloques G y H - ESPE",
                emoji: "📍"
              },
              {
                icon: <DollarSign size={48} />,
                title: "Inscripción",
                content: "$7.00 por pareja",
                emoji: "💰"
              },
              {
                icon: <Users size={48} />,
                title: "Participantes",
                content: "Estudiantes y Docentes DCCO",
                emoji: "👥"
              },
              {
                icon: <Trophy size={48} />,
                title: "Premios",
                content: "Para los 3 primeros lugares",
                emoji: "🏆"
              }
            ].map((item, idx) => (
              <div key={idx} className="info-card">
                <div className="info-emoji">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>

          {/* Reglas */}
          <div className="reglas-box">
            <h3>⚠️ Reglas del Torneo</h3>
            <ul>
              <li>
                <span className="rule-icon">🎴</span>
                <span><strong>Eliminación directa</strong> - ¡Cada partida cuenta!</span>
              </li>
              <li>
                <span className="rule-icon">⏰</span>
                <span><strong>Puntualidad obligatoria</strong> - No llegar = Eliminación automática</span>
              </li>
              <li>
                <span className="rule-icon">🚫</span>
                <span><strong>Prohibido:</strong> Bebidas alcohólicas y sustancias estupefacientes</span>
              </li>
              <li>
                <span className="rule-icon">🎤</span>
                <span><strong>Artistas invitados</strong> en planta baja del Bloque D</span>
              </li>
              <li>
                <span className="rule-icon">🎨</span>
                <span><strong>Ambiente festivo</strong> con decoración de Fiestas de Quito</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="galeria-section">
        <div className="section-content">
          <h2 className="section-title">
            📸 Galería de Momentos 🎥
          </h2>
          
          <div className="galeria-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="galeria-item">
                <div className="galeria-placeholder">
                  <div className="placeholder-icon">🃏</div>
                  <p>Tu foto/video aquí #{item}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="galeria-tip">
            💡 Agrega fotos de torneos anteriores, jugadas épicas, ganadores celebrando, etc.
          </p>
        </div>
      </section>

      {/* Premios */}
      <section id="premios" className="premios-section">
        <div className="section-content">
          <h2 className="section-title">
            🏆 Premios del Torneo 🏆
          </h2>
          
          <div className="premios-grid">
            {[
              { 
                place: "1er Lugar", 
                emoji: "🥇", 
                cards: "♠️ A + ♥️ A",
                color: "gold"
              },
              { 
                place: "2do Lugar", 
                emoji: "🥈", 
                cards: "♣️ K + ♦️ K",
                color: "silver"
              },
              { 
                place: "3er Lugar", 
                emoji: "🥉", 
                cards: "♠️ Q + ♥️ Q",
                color: "bronze"
              }
            ].map((premio, idx) => (
              <div key={idx} className={`premio-card ${premio.color} ${idx === 0 ? 'destacado' : ''}`}>
                <div className="premio-emoji">{premio.emoji}</div>
                <h3>{premio.place}</h3>
                <div className="premio-cards">{premio.cards}</div>
                <p className="premio-text">Premio sorpresa 🎁</p>
              </div>
            ))}
          </div>

          <div className="premios-info">
            <div className="premio-money">💰</div>
            <p className="premio-title">
              ¡Todo el dinero recaudado es para premios!
            </p>
            <p className="premio-subtitle">
              Más participantes = Mejores premios 🎉
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <div className="cta-icon">🃏</div>
          <h2>¿Listo para Dominar las Cartas?</h2>
          <p>¡Forma tu pareja y demuestra quién es el maestro del 40!</p>
          <div className="cta-buttons">
            <button onClick={handleInscripcion} className="btn-inscripcion">
              🃏 Inscribirse Ahora
            </button>
            <button onClick={handleWhatsAppPago} className="btn-whatsapp">
              <Phone size={24} />
              Enviar Comprobante
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-icon">🎴</div>
          <p>Universidad de las Fuerzas Armadas - ESPE</p>
          <p>Departamento de Ciencias de la Computación</p>
          <p className="footer-event">Campeonato de 40 - Fiestas de Quito 2025 🎉</p>
          <div className="footer-suits">
            <span>♠️</span>
            <span>♥️</span>
            <span>♣️</span>
            <span>♦️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}