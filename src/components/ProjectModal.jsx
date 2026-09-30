export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{project?.title}</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}