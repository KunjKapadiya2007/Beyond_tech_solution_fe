'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SphereProps {
    className?: string;
    style?: React.CSSProperties;
}

const RotatingWireframeSphere: React.FC<SphereProps> = ({ className = '', style }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#1A1818');

        const camera = new THREE.PerspectiveCamera(
            60,
            mount.clientWidth / mount.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.innerHTML = '';
        mount.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create the sphere
        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xee2a6d,
            transparent: true,
            opacity: 0.8,
        });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);

        const vertices = geometry.attributes.position.array;
        const dotGeometry = new THREE.SphereGeometry(0.03, 8, 8);
        const dotMaterial = new THREE.MeshBasicMaterial({
            color: 0xee2a6d,
            transparent: true,
            opacity: 0.9,
        });

        const dotsGroup = new THREE.Group();
        for (let i = 0; i < vertices.length; i += 3) {
            const dot = new THREE.Mesh(dotGeometry, dotMaterial);
            dot.position.set(vertices[i], vertices[i + 1], vertices[i + 2]);
            dotsGroup.add(dot);
        }

        const sphereGroup = new THREE.Group();
        sphereGroup.add(wireframe);
        sphereGroup.add(dotsGroup);
        scene.add(sphereGroup);

        // Rotation state
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let autoRotate = true;

        const animate = () => {
            frameRef.current = requestAnimationFrame(animate);

            // Auto-rotation when not dragging
            if (autoRotate) {
                sphereGroup.rotation.x += 0.004;
                sphereGroup.rotation.y += 0.004;
            }

            renderer.render(scene, camera);
        };
        animate();

        // Resize handling
        const handleResize = () => {
            if (!mount) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Mouse and touch controls
        const handleMouseDown = (event: MouseEvent | TouchEvent) => {
            isDragging = true;
            autoRotate = false;

            const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
            const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

            previousMousePosition = {
                x: clientX,
                y: clientY,
            };
        };

        const handleMouseMove = (event: MouseEvent | TouchEvent) => {
            if (!isDragging) return;

            const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
            const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

            const deltaMove = {
                x: clientX - previousMousePosition.x,
                y: clientY - previousMousePosition.y,
            };

            const rotationSpeed = 0.005;
            sphereGroup.rotation.y += deltaMove.x * rotationSpeed;
            sphereGroup.rotation.x += deltaMove.y * rotationSpeed;

            previousMousePosition = {
                x: clientX,
                y: clientY,
            };
        };

        const handleMouseUp = () => {
            isDragging = false;
            setTimeout(() => {
                autoRotate = true; // resume auto-rotate after a short delay
            }, 1000);
        };

        // Event listeners
        mount.addEventListener('mousedown', handleMouseDown);
        mount.addEventListener('mousemove', handleMouseMove);
        mount.addEventListener('mouseup', handleMouseUp);
        mount.addEventListener('mouseleave', handleMouseUp);

        mount.addEventListener('touchstart', handleMouseDown, { passive: false });
        mount.addEventListener('touchmove', handleMouseMove, { passive: false });
        mount.addEventListener('touchend', handleMouseUp);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            if (rendererRef.current) rendererRef.current.dispose();
            mount.removeEventListener('mousedown', handleMouseDown);
            mount.removeEventListener('mousemove', handleMouseMove);
            mount.removeEventListener('mouseup', handleMouseUp);
            mount.removeEventListener('mouseleave', handleMouseUp);
            mount.removeEventListener('touchstart', handleMouseDown);
            mount.removeEventListener('touchmove', handleMouseMove);
            mount.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className={`w-full h-full ${className}`}
            style={style}
        />
    );
};

export default RotatingWireframeSphere;
